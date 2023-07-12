import path from 'path';
import fs from 'fs';

/** shared constants */

const outDirPathCss = path.resolve(process.cwd(), 'src', '__generated__', 'css');

/** general utilities */

function drain(stream) {
    try {
        stream.once('drain', () => console.log('drained file stream!'));
    } catch(e) {
        throw e;
    }
    
}

function loadTokens () {
    try {
        console.log('Attempting to load tokens...');
        const standardPath = path.resolve(process.cwd(), 'tokens.json');
        if (!fs.existsSync(standardPath)) {
            throw new Error('Missing `tokens.json` file @ path - ' + standardPath);
        }
        const tokenJsonFile = fs.readFileSync(standardPath, { encoding: 'utf-8' });
        const tokenJson = JSON.parse(tokenJsonFile);
        const validTokenJson = checkValidityOfTokenShape(tokenJson);
        if (!validTokenJson) {
            throw new Error('Invalid Design Token Blob shape. Check `tokens.json`');
        }
        console.log('Loaded tokens!');
        return tokenJson;
    } catch (e) {
        throw e;
    }
}

function checkValidityOfTokenShape(tokenJson) {
    const fields = ['spacing', 'color', 'font', 'borderRadius', 'boxShadow'];
    for (const field of fields) {
        if (!tokenJson[field]) {
            return false;
        }
    }
    return true;
}

/** css utilities */

function cleanCssOutDir() {
    try {
        console.warn('Cleaning existing auto-generated css code...');
        fs.rmSync(outDirPathCss, { recursive: true, force: true });
    } catch (e) {
        throw e;
    }
}

function buildCssOutDir() {
    try {
        console.info('Building css out directory')
        fs.mkdirSync(outDirPathCss, { recursive: true });
    } catch (e) {
        throw e;
    }
}

function buildSpacingCss (tokenJson) {
    const tokens = tokenJson.spacing;
    const variableOutFile = path.resolve(outDirPathCss, 'spacing-variables.css');
    const classNameOutFile = path.resolve(outDirPathCss, 'spacing.css');
    const classNameFileStream = fs.createWriteStream(classNameOutFile);
    const variableFileStream = fs.createWriteStream(variableOutFile);
    variableFileStream.write(':root {\n\t');
    function formatClassName(attribute) {
        const attributesSplit = attribute.split('-');
        return attributesSplit.map(str => str.charAt(0).toLowerCase()).join('');
    }
    for (const token of tokens) {
        const { unit, value, scale, css, tokenName } = token;
        if (variableFileStream.writableNeedDrain) {
            drain(variableFileStream);
        }
        const variableString = `--${tokenName}:${value}${unit};\n\t`
        variableFileStream.write(variableString);
        for (const attribute of css.appliesTo) {
            const className = `${formatClassName(attribute)}-${scale}`;
            const cssString = `.${className}{${attribute}:${value}${unit};}\n`;
            if (classNameFileStream.writableNeedDrain) {
                drain(classNameFileStream);
            }
            classNameFileStream.write(cssString);
        }
    }
    classNameFileStream.close();
    variableFileStream.write('\n}');
    variableFileStream.close();
}

function buildColorCss (tokenJson) {
    const tokens = tokenJson.color;
    const variableOutFile = path.resolve(outDirPathCss, 'color-variables.css');
    const classNameOutFile = path.resolve(outDirPathCss, 'color.css');
    const classNameFileStream = fs.createWriteStream(classNameOutFile);
    const variableFileStream = fs.createWriteStream(variableOutFile);
    variableFileStream.write(':root {\n\t');
    for (const token of tokens) {
        const { value, scale, css, tokenName } = token;
        if (variableFileStream.writableNeedDrain) {
            drain(variableFileStream);
        }
        const variableString = `--${tokenName}:${value};\n\t`
        variableFileStream.write(variableString);
        for (const attribute of css.appliesTo) {
            const className = `${attribute}-${tokenName}`;
            const cssString = `.${className}{${attribute}:${value};}\n`;
            if (classNameFileStream.writableNeedDrain) {
                drain(classNameFileStream);
            }
            classNameFileStream.write(cssString);
        }
    }
    classNameFileStream.close();
    variableFileStream.write('\n}');
    variableFileStream.close();
}

function buildCss(tokenJson) {
    try {

        /** 1 prepare out dir */
        if (fs.existsSync(outDirPathCss)) {
            cleanCssOutDir();
        }
        buildCssOutDir()

        /** 2 build spacing */
        buildSpacingCss(tokenJson);

        /** 3 build color */
        buildColorCss(tokenJson);

    } catch (e) { 
        throw e; 
    }
}

/** ts utilities */

function buildTypes(tokenJson) {}

function build() {
    try {
        console.log('Beginning `generate` operation...');
        const tokenJson = loadTokens();
        buildCss(tokenJson);
        buildTypes(tokenJson);
    } catch (e) {
        console.error(e);
    }
}

build();