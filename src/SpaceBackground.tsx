import { useEffect, useRef } from 'react'

const rand = (a: number, b: number) => Math.random() * (b - a) + a

interface Star { x: number; y: number; r: number; phase: number; speed: number; depth: number; color: string }
interface Meteor { x: number; y: number; vx: number; vy: number; len: number; life: number; maxLife: number }

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let W = window.innerWidth, H = window.innerHeight
    canvas.width = W; canvas.height = H

    let mx = W / 2, my = H / 2, animId = 0, t = 0
    let earthAngle = 0, meteorTimer = 0

    const stars: Star[] = Array.from({ length: 280 }, () => ({
      x: rand(0, W), y: rand(0, H),
      r: rand(0.3, 2.2),
      phase: rand(0, Math.PI * 2), speed: rand(0.5, 2),
      depth: rand(0.2, 1),
      color: Math.random() < 0.07 ? '#93c5fd' : Math.random() < 0.07 ? '#fde68a' : '#fff',
    }))

    const meteors: Meteor[] = []
    const spawnMeteor = () => {
      const angle = rand(0.4, 0.9)
      meteors.push({
        x: rand(0, W * 0.7), y: rand(-30, H * 0.3),
        vx: Math.cos(angle) * rand(10, 18),
        vy: Math.sin(angle) * rand(10, 18),
        len: rand(100, 200), life: 0, maxLife: rand(50, 90),
      })
    }

    const drawEarth = (cx: number, cy: number, r: number, angle: number) => {
      // Atmosphere glow rings
      for (let i = 3; i >= 1; i--) {
        const g = ctx.createRadialGradient(cx, cy, r * 0.95, cx, cy, r * (1 + i * 0.2))
        g.addColorStop(0, `rgba(56,189,248,${0.1 / i})`); g.addColorStop(1, 'rgba(56,189,248,0)')
        ctx.beginPath(); ctx.arc(cx, cy, r * (1 + i * 0.2), 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()
      }
      // Ocean
      const ocean = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.25, r * 0.05, cx, cy, r)
      ocean.addColorStop(0, '#2563eb'); ocean.addColorStop(0.5, '#1d4ed8'); ocean.addColorStop(1, '#0f172a')
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = ocean; ctx.fill()

      // Continents
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip()
      ctx.translate(cx, cy); ctx.rotate(angle)
      const lands = [
        [-r*.28,-r*.22,r*.18,r*.26,-0.3,'rgba(21,128,61,0.75)'],
        [r*.1,-r*.05,r*.1,r*.32,0.1,'rgba(22,163,74,0.7)'],
        [r*.28,-r*.18,r*.24,r*.22,-0.2,'rgba(21,128,61,0.65)'],
        [r*.38,r*.28,r*.1,r*.08,0.4,'rgba(101,163,13,0.65)'],
        [-r*.18,r*.28,r*.09,r*.18,0.1,'rgba(22,163,74,0.7)'],
      ] as [number,number,number,number,number,string][]
      for (const [ex,ey,rx,ry,rot,color] of lands) {
        ctx.beginPath(); ctx.ellipse(ex,ey,rx,ry,rot,0,Math.PI*2); ctx.fillStyle=color; ctx.fill()
      }
      // Clouds
      ctx.rotate(-angle + angle * 0.6); ctx.globalAlpha = 0.18; ctx.fillStyle = '#fff'
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2
        ctx.beginPath()
        ctx.ellipse(Math.cos(a)*r*.55, Math.sin(a)*r*.4, r*rand(.1,.2), r*rand(.04,.07), a+.5, 0, Math.PI*2)
        ctx.fill()
      }
      ctx.globalAlpha = 1; ctx.restore()

      // Specular highlight
      const spec = ctx.createRadialGradient(cx-r*.4,cy-r*.4,0,cx-r*.4,cy-r*.4,r*.8)
      spec.addColorStop(0,'rgba(255,255,255,0.13)'); spec.addColorStop(1,'rgba(255,255,255,0)')
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fillStyle=spec; ctx.fill()

      // Shadow
      const sh = ctx.createRadialGradient(cx+r*.55,cy+r*.3,0,cx+r*.3,cy+r*.1,r*1.1)
      sh.addColorStop(0,'rgba(2,6,23,0.75)'); sh.addColorStop(0.6,'rgba(2,6,23,0.3)'); sh.addColorStop(1,'rgba(2,6,23,0)')
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fillStyle=sh; ctx.fill()
    }

    const draw = () => {
      t++; earthAngle += 0.0004; meteorTimer++

      ctx.fillStyle = '#020617'; ctx.fillRect(0, 0, W, H)

      // Nebulae
      const nebulae = [
        {x:W*.12,y:H*.18,r:320,c:'99,102,241',p:0},
        {x:W*.8,y:H*.65,r:260,c:'168,85,247',p:1.5},
        {x:W*.5,y:H*.92,r:210,c:'6,182,212',p:3},
        {x:W*.9,y:H*.1,r:180,c:'244,63,94',p:2},
      ]
      for (const n of nebulae) {
        const a = 0.055 + 0.025 * Math.sin(t * 0.007 + n.p)
        const g = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r)
        g.addColorStop(0,`rgba(${n.c},${a})`); g.addColorStop(1,`rgba(${n.c},0)`)
        ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fillStyle=g; ctx.fill()
      }

      // Earth (bottom-right)
      const er = Math.min(W,H) * 0.28
      drawEarth(W * 0.85, H * 0.78, er, earthAngle)

      // Cursor glow
      const cg = ctx.createRadialGradient(mx,my,0,mx,my,140)
      cg.addColorStop(0,'rgba(99,102,241,0.07)'); cg.addColorStop(1,'rgba(99,102,241,0)')
      ctx.beginPath(); ctx.arc(mx,my,140,0,Math.PI*2); ctx.fillStyle=cg; ctx.fill()

      // Stars with parallax
      const pxOff = (mx - W/2) / W
      const pyOff = (my - H/2) / H
      for (const s of stars) {
        const tw = 0.5 + 0.5 * Math.sin(t * s.speed * 0.04 + s.phase)
        const ox = pxOff * s.depth * 35, oy = pyOff * s.depth * 35
        ctx.beginPath(); ctx.arc(s.x+ox, s.y+oy, s.r, 0, Math.PI*2)
        ctx.fillStyle = s.color; ctx.globalAlpha = tw * s.depth; ctx.fill()
        if (s.r > 1.5 && tw > 0.7) {
          const glow = ctx.createRadialGradient(s.x+ox,s.y+oy,0,s.x+ox,s.y+oy,s.r*5)
          glow.addColorStop(0,`rgba(255,255,255,${tw*0.25})`); glow.addColorStop(1,'rgba(255,255,255,0)')
          ctx.beginPath(); ctx.arc(s.x+ox,s.y+oy,s.r*5,0,Math.PI*2); ctx.fillStyle=glow; ctx.fill()
        }
        ctx.globalAlpha = 1
      }

      // Shooting stars
      if (meteorTimer > rand(100, 280)) { spawnMeteor(); meteorTimer = 0 }
      for (const m of meteors) {
        if (m.life >= m.maxLife) continue
        m.life++; m.x += m.vx; m.y += m.vy
        const prog = m.life / m.maxLife
        const a = prog < 0.2 ? prog / 0.2 : 1 - (prog - 0.2) / 0.8
        const spd = Math.sqrt(m.vx * m.vx + m.vy * m.vy)
        const g = ctx.createLinearGradient(m.x - (m.vx/spd)*m.len, m.y - (m.vy/spd)*m.len, m.x, m.y)
        g.addColorStop(0,'rgba(255,255,255,0)'); g.addColorStop(1,`rgba(255,255,255,${a*0.9})`)
        ctx.beginPath()
        ctx.moveTo(m.x - (m.vx/spd)*m.len, m.y - (m.vy/spd)*m.len)
        ctx.lineTo(m.x, m.y)
        ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onMouse = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight
      canvas.width = W; canvas.height = H
    }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100vw', height: '100vh' }} />
}
