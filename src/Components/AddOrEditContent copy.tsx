import React, { useState } from 'react'
import { Container, TextArea } from '../assect/styles/styleComponent';

const AddOrEditContent = () => {
    const [content, setContent] = useState<string>('');
    
  return (
    <Container>
      <h1>Edit Content</h1>
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </Container>
  )
}

export default AddOrEditContent
