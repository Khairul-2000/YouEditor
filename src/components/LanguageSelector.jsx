import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ onSelect }) => {
  return (
    <div className="mb-3">
      <label htmlFor="language" className="block text-2xl text-white mb-2">
        Language:
      </label>
      <select
        className="p-2 bg-gray-800 text-white rounded-md outline-0 "
        id="language"
        onClick={(e) => onSelect(e.target.value)}
      >
        {languages.map(([language, version]) => (
          <option key={language} value={language}>
            {language} {version}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
