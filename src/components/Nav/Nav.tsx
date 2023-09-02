import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { NavContainer } from './Nav.styled';

import { ROUTES } from 'routes/constants';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <NavContainer>
      <Button href={ROUTES.deletedEmployees} variant="contained">
        {t('general.deletedEmployees')}
      </Button>
      <Button href={ROUTES.employees} variant="contained">
        {t('general.activeEmployees')}
      </Button>
    </NavContainer>
  );
};

export default Nav;
