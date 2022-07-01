import classNames from "classnames";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
    isNavOpen: boolean
}

export function Sidebar({ isNavOpen }: SidebarProps) {
    const { data } = useGetLessonsQuery()

    return (
        <aside className={classNames("lg:w-[348px] w-screen min-h-screen lg:relative absolute bg-gray-700 border-l p-6 border-gray-600 lg:block", {
            'hidden': !isNavOpen,
            'block': isNavOpen
        })}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Classes schedule</span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}