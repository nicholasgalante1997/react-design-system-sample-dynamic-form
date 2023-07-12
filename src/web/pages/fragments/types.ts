export type HeadingProps = {
    current: 'configure' | 'form';
    update(next: 'configure' | 'form'): void;
}