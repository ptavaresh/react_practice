import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (<div className="ui containter comments">
        <ApprovalCard >
            <CommentDetail author="Pedro Tavares" comment="Nice post" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard >
            <CommentDetail author="Maria Hernandez" comment="Great" timeAgo="Today at 8:15PM" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard >
            <CommentDetail author="Mowgli Tavares" comment="Good" timeAgo="Today at 2:50PM" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard >
            <CommentDetail author="Pablo Torres" comment="Not Bad" timeAgo="Today at 12:00PM" avatar={faker.image.avatar()}/>
        </ApprovalCard>
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));