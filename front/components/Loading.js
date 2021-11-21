import { useNProgress } from '@tanem/react-nprogress'
import PropTypes from 'prop-types'
import s from '@sc/Loading.module.scss'

const Loading = (props) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: props.isRouteChanging
  })

  return (
        <>
            <div className={s.container}
                 style={{
                   opacity: isFinished ? 0 : 1,
                   transition: `opacity ${animationDuration}ms linear`
                 }}>
                <div className={s.bar}
                     style={{ marginLeft: `${(-1 + progress) * 100}%`, transition: `marginLeft ${animationDuration}ms linear` }}
                >
                    <div className={s.spinner} />
                </div>
            </div>
        </>
  )
}
Loading.propTypes = {
  isRouteChanging: PropTypes.bool
}
Loading.defaultProps = {
  isRouteChanging: false
}
export default Loading
