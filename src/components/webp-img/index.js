import React, { forwardRef, Fragment } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

function ImgContent({ imgUrl, alt }) {
  return (
    <>
      <source
        srcSet={`${imgUrl.replace(/\.(png|jpg|jpeg)$/, '.webp')}`}
        type='image/webp'
      />
      <source srcSet={`${imgUrl}`} type='image/png' />
      <img src={imgUrl} alt={alt} style={{ width: '100%' }} />
    </>
  )
}

ImgContent.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

ImgContent.defaultProps = {}

// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component
export const WebpImgWithPassRef = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { imgUrl, alt, href, onClick, style = {} } = props

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <picture ref={ref} href={href} onClick={onClick} style={style}>
      <ImgContent imgUrl={imgUrl} alt={alt} />
    </picture>
  )
})
WebpImgWithPassRef.displayName = 'WebpImgWithPassRef'

function WebpImg({ imgUrl, alt, style, lazyLoad, height, offset, className }) {
  if (lazyLoad) {
    return (
      <LazyLoad height={height} offset={offset}>
        <picture
          style={{ maxWidth: '100%', height: 'auto', ...style }}
          className={className}
        >
          <ImgContent imgUrl={imgUrl} alt={alt} />
        </picture>
      </LazyLoad>
    )
  }
  return (
    <picture
      style={{ maxWidth: '100%', height: 'auto', ...style }}
      className={className}
    >
      <ImgContent imgUrl={imgUrl} alt={alt} />
    </picture>
  )
}

WebpImg.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.object,
  lazyLoad: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

WebpImg.defaultProps = {
  style: {},
  lazyLoad: true,
  height: 0,
  offset: 150
}

export default WebpImg
