import * as React from "react";

interface Props {
  children: string;
}

const TestButton: React.FC<Props> = ({
  children
}: Props) => {
  return <button className="hogehoge">{ children }</button>;
};

export default TestButton;
