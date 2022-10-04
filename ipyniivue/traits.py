from traitlets import TraitType, List

class Volume(TraitType):
	default_value = {}
	info_text = 'a volume'

	def validate(self, obj, value):
		accepted_keys = {'url', 'volume', 'name', 'color_map', 'opacity', 'visible'}
		if isinstance(value, dict):
			if len(value.keys()-accepted_keys) == 0:
				return value
		self.error(obj, value)