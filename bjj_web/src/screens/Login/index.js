import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jiujitsu from "../../imgs/jiujitsu.png";
import "./login.css";
import { AtSignIcon, AttachmentIcon } from "@chakra-ui/icons";

function Login() {
  const toast = useToast();

  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const signIn = (event) => {
    event.preventDefault();
    const { user, password } = formData;

    if (!user || !password) {
      setIsLoading(false);
      toast({
        title: `Please enter your user and password`,
        status: "error",
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    setRedirectToDashboard(true);
    if (redirectToDashboard) {
      setIsLoading(true);
      navigate("/dash");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="first-container">
          <h1>Get Started</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 15,
              marginTop: 15,
            }}
          >
            <div>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AtSignIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="tel"
                  id="user"
                  name="user"
                  placeholder="User"
                  value={formData.user}
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
            <div>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AttachmentIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
            <Link
              to="/reset-password"
              style={{
                fontSize: 10,
                cursor: "pointer",
                color: "salmon",
                opacity: ".7",
              }}
            >
              Reset Password...
            </Link>
            <div>
              <Button
                onClick={signIn}
                isLoading={isLoading}
                variant="solid"
                style={{
                  background: "salmon",
                  color: "white",
                  marginRight: 15,
                  width: 114,
                }}
              >
                SignIn
              </Button>
              <Button
                isLoading={isLoading}
                variant="outline"
                style={{ color: "salmon", width: 114 }}
              >
                SignUp
              </Button>
            </div>
          </div>
        </div>
        <div className="second-container">
          <img className="img" src={jiujitsu} />
        </div>
      </div>
    </>
  );
}

export default Login;
