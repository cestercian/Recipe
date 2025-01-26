import GradientText from './GradientText'



import Markdown from "react-markdown";
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