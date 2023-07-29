import { PRIORITIES } from './priority';

interface SelectProps {
  priority: Todo['priority'];
  setPriority: (priority: string) => void;
}

const prioritiesList = PRIORITIES.map((priority) => (
  <option key={priority}>{priority}</option>
));

export const Select = ({priority, setPriority}: SelectProps) => (<div className="grow-0 pr-2">
    <select
      id="priority"
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      required>
      {prioritiesList}
    </select>
  </div>);
