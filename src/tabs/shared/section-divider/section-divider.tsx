export default function SectionDivider({
  title,
  count
}: {
  title: string;
  count: number;
}) {
  return (
    count > 0 && (
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-4 bg-gray-400 border-0 dark:bg-gray-500" />
        <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-500">
          {title}: {count}
        </span>
      </div>
    )
  );
}
