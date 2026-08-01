import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import profile from '../assets/Profile.jpeg'

gsap.registerPlugin(ScrollTrigger)

function MorphImage() {
  const imgRef = useRef(null)

  useEffect(() => {
    const heroTarget = document.querySelector('.hero-image-target img')
    const aboutTarget = document.querySelector('.about-image-target img')
    const flying = imgRef.current

    const setInitial = () => {
      const r = heroTarget.getBoundingClientRect()
      gsap.set(flying, {
        position: 'fixed',
        top: r.top,
        left: r.left,
        width: r.width,
        height: r.height,
        borderRadius: '50%',
      })
    }
    setInitial()

    const st = ScrollTrigger.create({
      trigger: '.about',
      start: 'top bottom',
      end: 'top center',
      scrub: true,
      markers: true,
      onUpdate: (self) => {
        const hr = heroTarget.getBoundingClientRect()
        const ar = aboutTarget.getBoundingClientRect()
        const p = self.progress
        gsap.set(flying, {
          top: hr.top + (ar.top - hr.top) * p,
          left: hr.left + (ar.left - hr.left) * p,
          width: hr.width + (ar.width - hr.width) * p,
          height: hr.height + (ar.height - hr.height) * p,
          borderRadius: `${50 + (10 - 50) * p}%`,
        })
      },
    })

    window.addEventListener('resize', setInitial)
    return () => {
      st.kill()
      window.removeEventListener('resize', setInitial)
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={profile}
      alt="profile"
      style={{ objectFit: 'cover', zIndex: 40, pointerEvents: 'none' }}
    />
  )
}

export default MorphImage