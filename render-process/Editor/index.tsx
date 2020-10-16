import * as React from 'react';
import GGEditor, { Mind, RegisterNode, withEditorContext } from 'gg-editor';
import { Row, Col } from 'antd';
import NodePanel from './NodePanel';
import BehaviorTree from './BehaviorTree';

import './Editor.css';

export interface EditorProps {

}

export default class Editor extends React.Component<EditorProps> {
  componentDidMount() {
    console.log("props", this.props);
  }

  render() {
    return (
      <GGEditor className="editor">
        <Row className="editorBd">
          <Col span={18} className="editorContent">
            <BehaviorTree />
          </Col>
          <Col span={6} className="editorSidebar">
            <NodePanel />
          </Col>
        </Row>
      </GGEditor>
    );
  }
}