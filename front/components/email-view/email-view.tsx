import { ReactElement } from 'react';
import { IEmailViewProps } from './email-view-type';

export const EmailView = (props: IEmailViewProps): ReactElement => {
  const { value } = props;

  const [emailName, emailDomain] = value.split('@');
  const [, emailDomainExtension] = emailDomain.split('.');

  return (
    <>
      {emailName.substring(0, 2)}***@***.{emailDomainExtension}
    </>
  );
};
