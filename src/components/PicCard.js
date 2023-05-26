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
import cStyle from "./component.module.css";
import MinCard from "./Card";
const PicCard = ({ savedPics, setSavedPics }) => {
    const [pics, setPics] = useState([]);
    const ranNum = (max) => {
        return Math.floor(Math.random(max) * 10);
    };
    const renderPics = () => {
        const url = `https://picsum.photos/v2/list?page=${ranNum(30)}&limit=10`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPics(data));
    };

    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };
    const rendStyle = {
        display: "flex",
        flexWrap: "wrap",
    };
    const buttonStyle = {
        display: "flex",
        marginTop: "20px",
        marginBottom: "10px",
    };
    return (
        <div style={style}>
            <div className="buttonCollection" style={buttonStyle}>
                <Button variant="contained" onClick={renderPics} size="large">
                    Generate Pictures
                </Button>
                <Button variant="contained" onClick={renderPics} size="large">
                    Show Saved Pictures
                </Button>
            </div>
            <div className="renderPicSpace" style={rendStyle}>
                {pics.map((pic, index) => (
                    <MinCard
                        key={index}
                        downloadUrl={pic.download_url}
                        author={pic.author}
                        url={pic.url}
                    />
                ))}
                {savedPics.map((pic, index) => (
                    <MinCard
                        key={index}
                        downloadUrl={pic.download_url}
                        author={pic.author}
                        url={pic.url}
                    />
                ))}
            </div>
        </div>
    );
};
export default PicCard;
