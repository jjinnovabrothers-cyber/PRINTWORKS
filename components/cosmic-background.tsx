"use client"

import { useEffect, useRef } from "react"

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    type P = { x: number; y: number; vx: number; vy: number; size: number; op: number; col: string }
    type C = { x1: number; y1: number; x2: number; y2: number; op: number; col: string; spd: number; prog: number }
    type H = { x: number; y: number; r: number; op: number; ph: number }
    let ps: P[] = [], cs: C[] = [], hs: H[] = []

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
      ps = []; cs = []; hs = []
      const cols = ["rgba(34,197,94,","rgba(234,179,8,","rgba(16,185,129,","rgba(74,222,128,","rgba(0,255,128,"]
      const n = Math.floor((canvas.width * canvas.height) / 5500)
      for (let i = 0; i < n; i++) ps.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx: (Math.random()-0.5)*0.25, vy: (Math.random()-0.5)*0.25, size: Math.random()*2.5+0.3, op: Math.random()*0.6+0.1, col: cols[Math.floor(Math.random()*cols.length)] })
      const cc = ["rgba(34,197,94,","rgba(234,179,8,","rgba(0,255,128,","rgba(16,185,129,"]
      for (let i = 0; i < Math.floor(canvas.height/180); i++) { const h = Math.random()>0.25; cs.push({ x1: h?0:Math.random()*canvas.width, y1: h?Math.random()*canvas.height:0, x2: h?canvas.width:Math.random()*canvas.width, y2: h?Math.random()*canvas.height+(Math.random()-0.5)*80:canvas.height, op: Math.random()*0.12+0.04, col: cc[Math.floor(Math.random()*cc.length)], spd: Math.random()*0.003+0.001, prog: Math.random() }) }
      for (let x = 0; x < canvas.width; x += 120) for (let y = 0; y < canvas.height; y += 120) if (Math.random()>0.7) hs.push({ x: x+(Math.random()-0.5)*40, y: y+(Math.random()-0.5)*40, r: 15+Math.random()*25, op: 0.02+Math.random()*0.04, ph: Math.random()*Math.PI*2 })
    }

    const hex = (cx: number, cy: number, r: number, o: number) => {
      ctx.beginPath()
      for (let a = 0; a < 6; a++) { const an = (Math.PI/3)*a - Math.PI/6; const px = cx+r*Math.cos(an); const py = cy+r*Math.sin(an); a===0?ctx.moveTo(px,py):ctx.lineTo(px,py) }
      ctx.closePath(); ctx.strokeStyle = `rgba(34,197,94,${o})`; ctx.lineWidth = 0.5; ctx.stroke()
    }

    let t = 0
    const draw = () => {
      t += 0.01; ctx.clearRect(0, 0, canvas.width, canvas.height)
      hs.forEach(h => hex(h.x, h.y, h.r, Math.max(0.01, h.op + Math.sin(t*2+h.ph)*0.02)))
      cs.forEach(c => {
        c.prog += c.spd; if (c.prog > 1) c.prog = 0
        const g = ctx.createLinearGradient(c.x1,c.y1,c.x2,c.y2)
        g.addColorStop(Math.max(0,c.prog-0.15),`${c.col}0)`); g.addColorStop(c.prog,`${c.col}${c.op})`); g.addColorStop(Math.min(1,c.prog+0.15),`${c.col}0)`)
        ctx.beginPath(); ctx.moveTo(c.x1,c.y1); ctx.lineTo(c.x2,c.y2); ctx.strokeStyle=g; ctx.lineWidth=1; ctx.stroke()
      })
      ps.forEach(p => {
        p.x+=p.vx; p.y+=p.vy
        if(p.x<0) p.x=canvas.width; if(p.x>canvas.width) p.x=0; if(p.y<0) p.y=canvas.height; if(p.y>canvas.height) p.y=0
        p.op+=(Math.random()-0.5)*0.015; p.op=Math.max(0.05,Math.min(0.7,p.op))
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fillStyle=`${p.col}${p.op})`; ctx.fill()
        if(p.size>1.5){ctx.beginPath();ctx.arc(p.x,p.y,p.size*4,0,Math.PI*2);ctx.fillStyle=`${p.col}${p.op*0.12})`;ctx.fill()}
      })
      animId = requestAnimationFrame(draw)
    }

    init(); draw()
    window.addEventListener("resize", init)
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", init) }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
}
