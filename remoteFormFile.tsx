import React from "react";
import { FormControl, HelperText, Label, TextInput, Button, Toolkit } from "@uitk/react";
 
const AnotherComp = (props: any) => {
  return <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <h1>Edited in remote server as tsx file</h1>
    {
      props.data.map((value: number, index: number) => {
        return <h1 key={index}>{value}</h1>
      })
    }
  </div>
}

const RemoteForm = (props: any) => {
  
  return <div style={{ width: '500px', margin: '1rem', marginLeft: 'auto', marginRight: 'auto' }}>
    <h1>This is a page rendered from a remote server</h1>
    <AnotherComp data={[1, 2, 3, 4, 5]} />
    <Toolkit><FormControl id={"text-input"}>
      <Label>My Label</Label>
      <HelperText>My Helper Text</HelperText>
      <TextInput />
    </FormControl><br/>
    <Button block>
        Default
      </Button>
    </Toolkit>
    
  </div>
};
export default RemoteForm;
