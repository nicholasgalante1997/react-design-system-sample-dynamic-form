import React, { memo, useEffect, useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import isEqual from 'lodash.isequal';
import { withRenderMetrics } from '../components/RenderMetric';
import classNames from 'classnames';
import { PageConfiguration } from '@/types/page.config';
import { translateSectionsJsx } from './utils';
import { useGetFormData } from '../hooks';
import { logger } from '@/utils';
import { Link } from '../components/Link';
import { Button } from '../components/Button/Button';

type DynamicFormProps = {
  formKey: 'default' | 'beta' | 'gamma';
  set: React.Dispatch<React.SetStateAction<'default' | 'beta' | 'gamma'>>;
};

function DynamicForm({ formKey }: DynamicFormProps) {
  const { data, isLoading, isError } = useGetFormData(formKey);
  const queryClient = useQueryClient();
  const [allPages, setAllPages] = useState<PageConfiguration[]>([]);
  const [currentPage, setCurrentPage] = useState<PageConfiguration | undefined>();
  const [formOpen, setFormOpen] = useState(true);
  const isLoaded = useMemo(
    () => !isLoading && !isError && !!data && !!currentPage,
    [isLoading, isError, data, currentPage]
  );
  useEffect(() => {
    if (!!data && !isEqual(allPages, data.form)) {
      setAllPages(data.form);
    }
  }, [data]);
  useEffect(() => {
    if (allPages && !currentPage) {
      setCurrentPage(allPages[0]);
    }
  }, [allPages]);
  logger.info({ data });
  const incrementPage = () => {
    if (isLoaded && currentPage && currentPage.order < allPages.length) {
      const next = currentPage.order + 1;
      const found = allPages.find((page) => page.order === next);
      setCurrentPage(found);
    }
  };
  const decrementPage = () => {
    if (isLoaded && currentPage && currentPage.order > 1) {
      const next = currentPage.order - 1;
      const found = allPages.find((page) => page.order === next);
      setCurrentPage(found);
    }
  };
  const submit = () => {};
  const isLastPage = currentPage?.order === allPages.length;
  const onClear = () => {
    queryClient.invalidateQueries({ queryKey: ['forms', formKey] });
  };
  const joinedClassNames = useMemo(
    () => ({
      formContainer: classNames('form-container'),
      heading: classNames('form-heading', 'heading-400'),
      formBody: classNames('form-body'),
      formBodyLinkContainer: 'form-body-link-container',
      formFooter: 'form-footer',
      formFooterActionRow: classNames('form-footer-button-row', 'mt-400'),
    }),
    []
  );
  const jsx =
    isLoaded && currentPage ? (
      <form className={joinedClassNames.formContainer}>
        <h1 className={joinedClassNames.heading}>{currentPage?.title}</h1>
        <section className={joinedClassNames.formBody}>
          <div className="collapsible-section">
            <div>
              <h1 className="heading-300">{currentPage.collapsibleHeading}</h1>
            </div>
            <div className="collapsible-section-row">
              <h2 className="heading-200">{currentPage.collapsibleSideHeading}</h2>
              <img
                onClick={() => setFormOpen((prev) => !prev)}
                role="button"
                tabIndex={1}
                className={formOpen ? 'invert' : ''}
                src="/app/assets/caret-down.svg"
                alt="caret icon, used to open and close the form body"
                height="32px"
                width="32px"
              />
            </div>
          </div>
          {currentPage && formOpen && translateSectionsJsx(currentPage.sections)}
          {currentPage.footer && currentPage.footer.links && (
            <div className={joinedClassNames.formBodyLinkContainer}>
              {currentPage.footer.links.map((link) => (
                <Link {...(link as any)} />
              ))}
            </div>
          )}
        </section>
        <footer className={joinedClassNames.formFooter}>
          <div>
            <Link scale={200} target="_blank" href="http://localhost:3000/app/">
              <img
                src="/app/assets/plus.svg"
                alt="plus icon, to open another form in another tab"
                height="24px"
                width="24px"
              />
              {currentPage.footer.duplicateFormText}
            </Link>
          </div>
          <div className={joinedClassNames.formFooterActionRow}>
            <Button onClick={decrementPage} text="Back" />
            <Button onClick={onClear} text="Clear Order" />
            <Button
              onClick={isLastPage ? submit : incrementPage}
              fill
              text={isLastPage ? 'Submit' : 'Next'}
            />
          </div>
        </footer>
      </form>
    ) : (
      <div className="spinner"></div>
    );
  return jsx;
}

export const FormView = withRenderMetrics(memo(DynamicForm), 'FormView');
