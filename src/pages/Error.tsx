import {useRouteError} from 'react-router-dom';

export default function ErrorPage() {
    const error: { statusText?: string, message?: string } | unknown = useRouteError();
    console.error(error);

    const getErrorHTML = (error: { statusText: string, message: string } | unknown) => {
        // @ts-ignore
        return <i>{error.statusText || error.message}</i>;
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {getErrorHTML(error)};
                {/*<i>{error?.statusText || error?.message}</i>*/}
            </p>
        </div>
    );
}
