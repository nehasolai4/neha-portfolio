import { useEffect, useRef } from 'react'

function Starfield() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const w = wrapRef.current.clientWidth
    const gen = (n) => Array.from({ length: n }, () =>
      `${Math.floor(Math.random() * w)}px ${Math.floor(Math.random() * 800)}px #fff`
    ).join(',')

    const s1 = gen(140), s2 = gen(70), s3 = gen(35)
    ;['s1a', 's1b'].forEach(id => document.getElementById(id).style.boxShadow = s1)
    ;['s2a', 's2b'].forEach(id => document.getElementById(id).style.boxShadow = s2)
    ;['s3a', 's3b'].forEach(id => document.getElementById(id).style.boxShadow = s3)
  }, [])

  return (
    <div className="starfield" ref={wrapRef}>
      <div className="stars-move">
        <div id="s1a" className="star-layer star-sm" />
        <div id="s1b" className="star-layer star-sm" style={{ top: 800 }} />
        <div id="s2a" className="star-layer star-md" />
        <div id="s2b" className="star-layer star-md" style={{ top: 800 }} />
        <div id="s3a" className="star-layer star-lg" />
        <div id="s3b" className="star-layer star-lg" style={{ top: 800 }} />
      </div>
    </div>
  )
}

export default Starfield