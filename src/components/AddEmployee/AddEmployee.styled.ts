import { Box, Button } from '@mui/material';
import { styled } from 'styled-components/macro';

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 32px;
  background-color: #f6f6f6;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const AddEmployeeButton = styled(Button)`
  align-self: flex-end;
  max-width: 200px;
  margin-bottom: 20px !important;
`;
