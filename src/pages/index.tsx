import React, { FunctionComponent } from "react";
import FacebookOAuthButton from "@tidyiq/core/component/OAuthButton/FacebookOAuthButton";

// ::::::::::::::::::::::::::::::::::::::::::::::::
// Component
// ::::::::::::::::::::::::::::::::::::::::::::::::

const Index: FunctionComponent = () => {
  return (
    <FacebookOAuthButton onClick={() => console.log("test")}>
      Sign in with Facebook{" "}
    </FacebookOAuthButton>
  );
};

export default Index;
