import { useNavigate } from 'react-router-dom';
import IntlMessages from '@/app/helpers/IntlMessages';
import AppAnimate from '@/app/components/AppAnimate';
import AppPageMeta from '@/app/components/AppPageMeta';
import Logo from '../../../assets/icon/403.svg';
import {
  StyledErrorButton,
  StyledErrorContainer,
  StyledErrorContent,
  StyledErrorImage,
  StyledErrorPara,
} from '../index.styled';

const Error403 = () => {
  const navigate = useNavigate();

  const onGoBackToHome = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <AppPageMeta title="Unauthorized" />
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <StyledErrorContainer key="a">
          <StyledErrorImage>
            <img src={Logo} alt={Logo} />
          </StyledErrorImage>
          <StyledErrorContent>
            <h3>Unauthorized</h3>
            <StyledErrorPara>
              <p className="mb-0">You are not authorized for this page!</p>
            </StyledErrorPara>
            <StyledErrorButton type="primary" onClick={onGoBackToHome}>
              <IntlMessages id="error.goBackToHome" />
            </StyledErrorButton>
          </StyledErrorContent>
        </StyledErrorContainer>
      </AppAnimate>
    </>
  );
};

export default Error403;
