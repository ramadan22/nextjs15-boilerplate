'use client';

import ComponentCard from '@/ui/components/common/ComponentCard';
import Switch from '../Switch';

const ToggleSwitch = () => {
  const handleSwitchChange = (checked: boolean) => {
    console.log('Switch is now:', checked ? 'ON' : 'OFF');
  };
  return (
    <ComponentCard title="Toggle switch input">
      <div className="flex gap-4">
        <Switch label="Default" defaultChecked={true} onChange={handleSwitchChange} />
        <Switch label="Checked" defaultChecked={true} onChange={handleSwitchChange} />
        <Switch label="Disabled" disabled={true} />
      </div>
      &nbsp;
      <div className="flex gap-4">
        <Switch label="Default" defaultChecked={true} onChange={handleSwitchChange} color="gray" />
        <Switch label="Checked" defaultChecked={true} onChange={handleSwitchChange} color="gray" />
        <Switch label="Disabled" disabled={true} color="gray" />
      </div>
    </ComponentCard>
  );
};

export default ToggleSwitch;
