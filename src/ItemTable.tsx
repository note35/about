import React from "react"

import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Link from "@material-ui/core/Link"
import Chip from "@material-ui/core/Chip"
import YouTubeIcon from "@material-ui/icons/YouTube"
import GitHubIcon from "@material-ui/icons/GitHub"
import DescriptionIcon from "@material-ui/icons/Description"

interface LinkType {
  source: string,
  url: string
}

export interface RowType {
  year: string,
  reason: string,
  title: string,
  links: Array<LinkType>,
  tags?: Array<string>
}

const LinkIcon = {
  "Youtube": <YouTubeIcon />,
  "Github": <GitHubIcon />,
  "SlideShare": <DescriptionIcon />
}

export type ItemTableProps = {
  name: string,
  headers: string[],
  rowItems: Array<RowType>,
}

export function ItemTable({ name, headers, rowItems }: ItemTableProps): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table aria-label={name}>
        <TableHead>
          <TableRow>
            {headers.map((item, idx) => <TableCell key={idx} align="center">{item}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowItems.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row" align="center">{item.year}</TableCell>
              <TableCell align="center">{item.reason}</TableCell>
              <TableCell align="center">{item.title}
                {item.tags === undefined ? null : <br/>}
                {item.tags === undefined ? null : item.tags.map(
                  (tag, idx) => <Chip key={idx} size="small" label={tag} />
                )}
              </TableCell>
              <TableCell align="center">
                {item.links.map((link, idx) => {
                  return (
                    <Link key={idx} target="_blank" href={link.url}>
                      { /*
                        // @ts-ignore */
                        LinkIcon[link.source]
                      }
                    </Link>
                  )
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
