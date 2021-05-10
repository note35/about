import React from "react"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Chip from "@material-ui/core/Chip"

import { ItemTable } from "./ItemTable"
import { ToyItems } from "./ToyItems"

export function Toys(): JSX.Element {
  const description = "A list of toys I developed previously. Some of them may still be useful now, but most of them are not actively maintained but for reference only."
  const comments = ["🤓 Study", "💎 Template", "👨🏽‍💻 Hackathon", "🎮 Game"]

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">Toys</Typography>
        <Typography variant="body2" component="h2">
          {description}
          <br/>
          {comments.map((comment, idx) => <Chip key={idx} size="small" label={comment}/>)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ItemTable
          name="toys table"
          headers={["Year", "Reason", "Title", "Links"]}
          rowItems={ToyItems}
        />
      </Grid>
    </Grid>
  )
}
