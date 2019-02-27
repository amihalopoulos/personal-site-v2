import React from 'react'
import PropTypes from 'prop-types'
import { Spring, config, animated } from 'react-spring'
import * as Icons from './icons'

const styles = {
  tree: {
    position: 'relative',
    padding: '4px 0px 0px 0px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'flex-start'
  },
  pointer: {
    cursor: 'pointer',
  },
  toggle: {
    width: '1em',
    height: '1em',
    // marginRight: 10,
    cursor: 'pointer',
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'flex-start'

  },
  type: {
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    fontSize: '0.6em',
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },
  contents: {
    willChange: 'transform, opacity, height',
    // marginLeft: 6,
    // padding: '4px 0px 0px 14px',
    // borderLeft: '1px dashed rgba(255,255,255,0.4)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%'

  },
}

export default class Tree extends React.PureComponent {
  static defaultProps = { isOpen: false, visible: true, canHide: false }
  static propTypes = {
    isOpen: PropTypes.bool,
    visible: PropTypes.bool,
    canHide: PropTypes.bool,
    content: PropTypes.node,
    springConfig: PropTypes.func,
  }

  constructor(props) {
    super()
    this.state = { isOpen: props.isOpen, visible: props.visible, immediate: false }
  }

  toggle = () =>
    this.props.children &&
    this.setState(state => ({ isOpen: !state.isOpen, immediate: false }))

  toggleVisibility = () => {
    this.setState(
      state => ({ visible: !state.visible, immediate: true }),
      () => this.props.onClick && this.props.onClick(this.state.visible)
    )
  }

  componentWillReceiveProps(props) {
    this.setState(state => {
      return ['isOpen', 'visible'].reduce(
        (acc, val) =>
          this.props[val] !== props[val] ? { ...acc, [val]: props[val] } : acc,
        {}
      )
    })
  }

  render() {
    const { isOpen, visible, immediate } = this.state
    const { children, content, type, style, canHide, springConfig, onClick } = this.props
    const Icon =
      Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]

      return (
            <div style={{...styles.pointer, ...this.props.width}} /* style={{ ...styles.tree, ...style, ...styles.pointer }} */ onClick={onClick} className="treeview">

              <Icon
                className="toggle"
                style={{ ...styles.toggle, opacity: children ? 1 : 0.3 }}
                onClick={this.toggle}
              />
              <span style={{ ...styles.type, marginRight: type ? 10 : 0 }}>
                {type}
              </span>
              {canHide && (
                <Icons.EyeO
                  className="toggle"
                  style={{ ...styles.toggle, opacity: visible ? 1 : 0.4 }}
                  onClick={this.toggleVisibility}
                />
              )}
              <span style={{ verticalAlign: 'middle', color: children ? 'white' : '#63b1de' }}>{content}</span>
              <Spring
                native
                immediate={immediate}
                config={{ ...config.default, precision: 0.1 }}
                from={{ height: 0, opacity: 0, transform: 'translate3d(0,-20px,0)' }}
                to={{
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translate3d(0px,0,0)' : 'translate3d(0,-20px,0)',
                }}
                {...springConfig && springConfig(isOpen)}>
                {style => (
                  <animated.div className="treelimb" style={{ ...style, ...styles.contents }}>
                    {children}
                  </animated.div>
                )}
              </Spring>
            </div>
          )
        }
      }