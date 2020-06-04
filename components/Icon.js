import React from 'react'
import { Icon } from 'react-native-elements'

export default function GetIcon ({
  name,
  type,
  color
}) {
  return <Icon
    name={name}
    type={type}
    color={color}
  />
}
