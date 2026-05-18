import fs from 'fs';

class LogHelper {

    logError = (errorObject) => {

        const text =
`${new Date().toISOString()} : ${errorObject.message}

Stack Trace:
${errorObject.stack}

----------------------------------------

`;

        console.error(text);

        fs.appendFileSync(
            "errores.log",
            text
        );
    }
}

export default new LogHelper();