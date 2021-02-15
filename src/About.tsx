import React from "react"

import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"

import { MD2Html } from "./Utils"
import { Name, AboutItems, AboutLinkItems } from "./AboutItems"

export function About(): JSX.Element {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">{Name}</Typography>
        {AboutLinkItems.map((item, idx) => {
          return (
            <Link key={idx} target="_blank" href={item.url}>{item.icon}</Link>
          )
        })}
      </Grid>

      {AboutItems.map((item, idx) => {
        return (
          <Grid key={idx} item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {MD2Html(item.description)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
