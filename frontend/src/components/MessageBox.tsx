import React from 'react';

type MessageBoxProps = {
  variant?: string;
  children: React.ReactNode;
};

const MessageBox: React.FC<MessageBoxProps> = ({ variant, children }) => {
  return (
    <div className={`alert alert-${variant || 'info'}`}>
      {children}
    </div>
  );
};

export default MessageBox;
