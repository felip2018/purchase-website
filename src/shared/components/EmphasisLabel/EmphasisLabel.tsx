type EmphasisLabelProps = {
    txt: string;
    bgColor?: string;
}

export const EmphasisLabel = ({txt, bgColor}: EmphasisLabelProps) => {
    return (
        <div>
            <span style={{
                backgroundColor: bgColor ? bgColor : "#cccccc",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: 600,
            }}>{txt}</span>
        </div>
    )
}
