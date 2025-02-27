import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle
} from 'react-compare-slider';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After'
}) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      <ReactCompareSlider
        position={50}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: 'blur(4px)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid #ddd',
              color: '#333',
            }}
            aria-label="Comparison slider handle"
          />
        }
        itemOne={
          <div className="relative w-full h-full">
            <ReactCompareSliderImage
              src={beforeImage}
              alt="Before aesthetic treatment showing original appearance"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-4 bg-gray-900 bg-opacity-75 text-white py-1 px-3 text-sm rounded">
              {beforeLabel}
            </div>
          </div>
        }
        itemTwo={
          <div className="relative w-full h-full">
            <ReactCompareSliderImage
              src={afterImage}
              alt="After aesthetic treatment showing improved appearance"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 right-4 bg-sage-600 bg-opacity-75 text-white py-1 px-3 text-sm rounded">
              {afterLabel}
            </div>
          </div>
        }
        className="w-full aspect-square rounded-lg"
        aria-label="Before and after treatment comparison"
        aria-description="Drag the slider left and right to compare the before and after results of the treatment"
      />
    </div>
  );
};

export default BeforeAfterSlider;