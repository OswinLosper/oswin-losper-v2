import classNames from 'classnames';

import { Annotated } from '@/components/Annotated';
import { iconMap } from '@/components/svgs';
import Link from '../Link';

export default function Social(props) {
    const { elementId, className, label, altText, url, icon = 'facebook' } = props;
    const IconComponent = iconMap[icon];
    // Social profiles live on other sites, so open them in a new tab
    const external = /^https?:\/\//.test(url);

    return (
        <Annotated content={props}>
            <Link
                href={url}
                aria-label={altText}
                id={elementId || null}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={classNames('inline-flex items-center justify-center no-underline', className)}
            >
                {label && <span className="sr-only">{label}</span>}
                {IconComponent && <IconComponent className="fill-current w-icon h-icon" />}
            </Link>
        </Annotated>
    );
}
