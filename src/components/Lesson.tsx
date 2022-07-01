import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EE' • 'MMM' 'd' • 'h':'mm a")

    const isActiveLesson = slug === props.slug

    return (
        <Link
            to={`/event/lesson/${props.slug}`}
            className={classNames('group', {
                'cursor-default': !isLessonAvailable
            })}
            onClick={event => !isLessonAvailable && event.preventDefault()}>
            <span className="text-gray-300">{availableDateFormatted}</span>

            <div className={classNames('rounded border border-gray-500 p-4 mt-2', {
                'bg-green-500': isActiveLesson,
                'group-hover:border-green-500': isLessonAvailable,
            })}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={classNames('text-sm font-medium flex items-center gap-2', {
                            'text-white': isActiveLesson,
                            'text-blue-500': !isActiveLesson
                        })}>
                            <CheckCircle size={20} />
                            Released content
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Soon
                        </span>
                    )}
                    <span className={classNames("text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold", {
                        'border-white': isActiveLesson,
                        'border-green-300': !isActiveLesson,
                    })}>
                        {props.type === 'live' ? 'LIVE' : 'HANDS-ON'}
                    </span>
                </header>
                <strong className={classNames("mt-5 block", {
                    'text-white': isActiveLesson,
                    'text-gray-200': !isActiveLesson
                })}>{props.title}</strong>
            </div>
        </Link>
    )
}