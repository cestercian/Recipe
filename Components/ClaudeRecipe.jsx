import GradientText from './GradientText'
import Markdown from "react-markdown";
import React from "react";


const buttonStyle = {
    border: 'none',
    borderRadius: '6px',
    background: '#D17557',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    color: '#FAFAF8',
    padding: '9px 17px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    cursor: 'pointer',
};

function newFeature(){

}

export default function ClaudeRecipe(props) {
    return (
        <>
            <p></p>
            <GradientText
                colors={["#6a82fb", "#fc5c7d", "#6a82fb", "#fc5c7d", "#6a82fb"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
            >
                <h2>Chef Claude Recommends:</h2>
            </GradientText>
            <GradientText
                colors={["#6a82fb", "#fc5c7d", "#6a82fb", "#fc5c7d", "#6a82fb"]}
                animationSpeed={10}
                showBorder={false}
                className="custom-class"
            >
                <Markdown>
                    {props.recipe}
                </Markdown>
            </GradientText>


        </>

    )
}