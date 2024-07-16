import React from "react"
import { useParams } from "react-router-dom"

import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

interface Color {
  color?: "default" | "inherit" | "primary" | "secondary";
}

export type MyBoxProps = {
    prefix: string
}

export function MyBox({ prefix }: MyBoxProps): JSX.Element {
  const { color }: Color = useParams()

  const tColor = `text.${color}`

  return (
    <Box color={tColor} clone>
      <Button variant="contained" color={color}>
        {prefix}-{color}
      </Button>
    </Box>
  )
}
