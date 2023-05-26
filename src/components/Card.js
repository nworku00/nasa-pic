import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Popup from "reactjs-popup";
import cStyle from "./component.module.css"

const MinCard = ({ downloadUrl, url, author }) => {
    const [share, setShare] = useState(true);
    const [like, setLike] = useState(false)

    const copy = (shareText) => {
        setShare(!share);
        navigator.clipboard.writeText(shareText);
    }
    const changeLike = () => {
        setLike(!like)
    }
    const cardStyle = {
        margin: "8px",
        flexGrow: "1",
        backgroundColor: "#011E3C",
        color: "#1876D1",
    };
    return (
        <Card sx={{ maxWidth: 345 }}  style={cardStyle}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={downloadUrl}
                            title={author}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {author}
                            </Typography>
                            <Typography variant="body1">Click Share to Copy Image Link</Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: "space-around" }}>
                            <ThumbUpOffAltIcon sx={{ color:like? 'red':'#1876D1' }}  fontSize="large" onClick= {() => changeLike()} />
                            <Button
                                color={share ? "primary" : "secondary"}
                                variant="contained"
                                size="medium"
                                onClick={() => copy(url)}>
                                Share
                            </Button>
                        </CardActions>
                    </Card>
    )
}
export default MinCard