import React from "react"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import { ItemTable } from "./ItemTable"
import { TalkItems } from "./TalkItems"

export function Talks(): JSX.Element {
  const description = "I like to speak about Python and things related to Computer Science, contributing my passion to the community. My current goal is to give at least one PyCon talk per year. My topic is mostly about language itself, it can be something from my real working experience in the company, or private research. You can find my previous talks in the table."

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Typography variant="h4" component="h2">Talks</Typography>
        <Typography variant="body2" component="h2">
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ padding: 20 }}>
        <ItemTable
          name="talks table"
          headers={["Year", "Location", "Title", "Links"]}
          rowItems={TalkItems}
        />
      </Grid>
    </Grid>
  )
}
