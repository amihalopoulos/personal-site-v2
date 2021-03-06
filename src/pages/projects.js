import React, { Component, useState, useEffect } from 'react';
import { useSprings, animated, interpolate } from 'react-spring/hooks'
import { useGesture } from 'react-with-gesture'
import '../App.scss';

// const projects = [
// 'https://s3-us-west-2.amazonaws.com/alexeimihalopoulos.com-photos/goodthought3.png',
// 'https://s3-us-west-2.amazonaws.com/alexeimihalopoulos.com-photos/goodthought2.png',
// 'https://s3-us-west-2.amazonaws.com/alexeimihalopoulos.com-photos/goodthought1.png',
// 'https://s3-us-west-2.amazonaws.com/alexeimihalopoulos.com-photos/deluneticket.png',
// 'https://s3-us-west-2.amazonaws.com/alexeimihalopoulos.com-photos/nasa-rovers.png',
// 'https://s3-us-west-2.amazonaws.com/alexeimihalopoulos.com-photos/ffdticket.png'
// ];

const projects = [
  {
    name:'alexeimihalopoulos.com',
    purpose: 'Self promotion',
    tech: 'Node, react, AWS',
    url: 'http://www.alexeimihalopoulos.com'
  },
  {
    name:'De Lune',
    purpose: 'Custom ecommerce storefront',
    tech: 'Shopify, Liquid, Javascript',
    url: 'http://www.delune.co'
  },
  {
    name:'Fantasy Football Dashboard',
    purpose: 'Dominate my opponents',
    tech: 'Node.js, Express, React, redux, MongoDB, Oauth2, AWS',
    url: 'http://www.github.com/amihalopoulos/fantasy-football-analyzer'
  }
]

const cards = [
  'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
]
// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, y: i * -4, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function ProjectsPage() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(projects.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === projects.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className="page projects">
      {
        props.map(({ x, y, rot, scale }, i) => (
            <animated.div className="animated1" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
              {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
              <animated.div className="animated2" {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${projects[i]})`  }}> 
                <div className="project">
                  <div className="title-value">
                    <div className="title">Project</div>
                    <div className="value">{projects[i].name}</div>
                  </div>
                  <div className="title-value">
                    <div className="title">Tech</div>
                    <div className="value">{projects[i].tech}</div>
                  </div>
                  <div className="title-value">
                    <div className="title">Purpose</div>
                    <div className="value">{projects[i].purpose}</div>
                  </div>
                  <div className="title-value">
                    <div className="title">Url</div>
                    <div className="value"><a href={projects[i].url}>link</a></div>
                  </div>
                </div>
              </animated.div> 
            </animated.div>
          ))
      }
    </div>
  )
}

// function ProjectsPage(props) {
//     return (
//       <div>my projects</div>
//     );
// }

export default ProjectsPage;