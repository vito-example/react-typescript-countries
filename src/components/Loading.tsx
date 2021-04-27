import React, {FC} from "react";

interface IloadingProps {
    loading: boolean;
}

const Loading: FC<IloadingProps> = (props) => {
    const {loading} = props;

    if (loading) {
        return <>Loading...</>
    }

    return <>{props.children}</>
};


export default Loading;