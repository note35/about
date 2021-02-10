import React from "react"
import InfoIcon from "@material-ui/icons/Info"
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"

export const MenuItems = [{
  "name": "about",
  "text": "About",
  "icon": <InfoIcon />,
  "path": "/"
}, {
  "name": "talks",
  "text": "Talks",
  "icon": <RecordVoiceOverIcon />,
  "path": "/talks"
}, {
  "name": "toys",
  "text": "Toys",
  "icon": <SportsEsportsIcon />,
  "path": "/toys"
}]
