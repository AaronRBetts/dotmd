import React, { Component } from 'react';
import marked from 'marked';
const initialState = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  console.log(firstLine, lastLine)
}
\`\`\`
  
You can also make text **bold**, _italic_, or **_both!_**
You can ~~cross stuff out~~.
There's also [links](https://aaronrbetts.github.io), and
> Block Quotes!

We have tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Here | And even here!

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

`

export default class MDPreviewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: initialState,
      markdown: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  copy(target) {
    // const toSelect = document.getElementById(target);
    // toSelect.select();
    // document.execCommand('copy');
  }

  render() {
    let {text} = this.state;
    marked.setOptions({
      breaks: true,
    });
    let convertedMD = marked(text);

    return (
      <div id="mainSection">
        <div id="leftSection" className="p-2 section-wrapper">
          <div className="p-2 heading"><h4>Editor</h4></div>
          <textarea id="editor" value={text} onChange={this.handleChange}></textarea>
        </div>
        <div id="rightSection" className="p-2 section-wrapper">
          <div className="p-2 heading"><h4>.md Preview</h4></div>
          <div className="p-1" id="preview" dangerouslySetInnerHTML={{__html: convertedMD}}></div>
          <div className="p-2 heading"><h4>Html</h4></div>
          <div className="p-1" id="previewHtml">{convertedMD}</div>
        </div>
      </div>
    )
  }
}