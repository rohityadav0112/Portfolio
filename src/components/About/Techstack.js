import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiPython,
    DiJavascript1,
    DiFastapi,
    DiReact,
    DiDjango,
    DiGit,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
    return ( <
        Row style = {
            { justifyContent: "center", paddingBottom: "50px" }
        } >
        <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        CgCPlusPlus / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiJavascript1 / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        TbBrandGolang / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiPython / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiReact / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        SiSolidity / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiDjango / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        SiNextdotjs / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiGit / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        SiFirebase / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        SiRedis / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        SiPostgresql / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiPython / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiFastapi / >
        <
        /Col> < /
        Row >
    );
}

export default Techstack;