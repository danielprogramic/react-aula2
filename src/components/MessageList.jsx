import React from 'react';
import Message  from './Message.jsx';

class MessageList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           messages: [
              'Tadeu Tudo nosso Mensagem',
              'Segunda Mensagem',
              'Primeira Mensagem',
              'Segunda Mensagem',
              'Primeira Mensagem',
              'Segunda Mensagem',
              'Primeira Mensagem',
              'Segunda Mensagem',
              'Primeira Mensagem',
              'Segunda Mensagem'
          ]
       };
    }


  render(){
    var teste = 0;
    var messageNodes = this.state.messages.map((message)=> {
      teste++;
      return (    
        <Message message={message} />

      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}


export default MessageList;