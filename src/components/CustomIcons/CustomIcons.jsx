import { useCallback } from 'react'
import { string } from 'prop-types'

import Github from './icons/Github'
import Heart from './icons/Heart'
import Linkedin from './icons/Linkedin'
import Twitter from './icons/Twitter'

const CustomIcons = ({ id, ...props }) => {
  const getIconById = useCallback(iconId => {
    const icons = {
      github: Github,
      heart: Heart,
      linkedin: Linkedin,
      twitter: Twitter,
    }

    return icons[iconId]
  }, [])

  const Component = getIconById(id)

  return <Component {...props} />
}

CustomIcons.propTypes = {
  id: string,
  className: string,
  color: string,
}

CustomIcons.defaultProps = {
  id: null,
  className: null,
  color: null,
}

export default CustomIcons
