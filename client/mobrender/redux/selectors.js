export default (state, props) => ({

  getMobilization: () => {
    const { list: { currentId, data } } = state.mobilizations

    const mobilization = (id) => data.filter(mob => mob.id === id)[0]

    const hasParams = props && props.match && props.match.params

    if (!currentId && hasParams && props.match.params.mobilization_id) {
      return mobilization(parseInt(props.match.params.mobilization_id))
    }
    return mobilization(currentId)
  },

  mobilizationsIsLoading: () => {
    return state.mobilizations.list.fetching
  },

  mobilizationsIsLoaded: () => {
    return state.mobilizations.list.isLoaded
  },

  mobilizationIsSaving: () => {
    return state.mobilizations.list.saving
  },

  getMobilizationMenuActive: () => {
    return state.mobilizations.list.menuActiveIndex
  },

  getMobilizations: (f) => {
    const { list: { data } } = state.mobilizations
    if (f && f.status) {
      return data.filter(m => m.status === f.status)
    }
    return data.filter(m => m.status === 'active')
  },

  hasCurrentMobilization: () => {
    return state.mobilizations.list.currentId
  },

  hasMouseOver: (key, id) => {
    const { hover } = state.mobilizations
    if (key in hover) return hover[key] === id
    else return false
  },

  getBlocks: () => {
    const { blocks: { data } } = state.mobilizations
    return data.sort((a, b) => a.position - b.position)
  },

  blocksIsLoaded: () => {
    return state.mobilizations.blocks.isLoaded
  },

  canMoveUp: () => {
    const { block } = props
    const { blocks: { data } } = state.mobilizations
    return data[0] && data[0].id !== block.id
  },

  canMoveDown: () => {
    const { block } = props
    const { blocks: { data } } = state.mobilizations
    const index = data.length - 1
    return data[index] && data[index].id !== block.id
  },

  getUploadProgress: (key) => {
    const { uploader } = state.mobilizations
    return uploader[key]
  },

  getEditing: () => {
    const { edition } = state.mobilizations
    return edition.isEditing ? edition.mode : undefined
  },

  getBlockSaving: () => {
    const { blocks: { saving } } = state.mobilizations
    return saving
  },

  getWidgets: () => {
    const { widgets: { data } } = state.mobilizations
    return data
  },

  getWidget: (widgetId) => {
    const { widgets: { data } } = state.mobilizations
    return data.filter(w => w.id === parseInt(widgetId))[0]
  },

  mobilizationIsNeedReload: () => {
    const {
      list: { reload },
      blocks: { isLoaded: blocksIsLoaded },
      widgets: { isLoaded: widgetsIsLoaded }
    } = state.mobilizations
    return !blocksIsLoaded || !widgetsIsLoaded ? true : reload
  },

  widgetsIsLoaded: () => {
    return state.mobilizations.widgets.isLoaded
  },

  widgetsIsLoading: () => {
    return state.mobilizations.widgets.saving
  },

  renderIsLoading: () => {
    const {
      widgets: {
        isLoaded: widgetsIsLoaded,
        fetching: widgetsIsLoading
      },
      blocks: {
        isLoaded: blocksIsLoaded,
        fetching: blocksIsLoading
      }
    } = state.mobilizations

    const isLoaded = blocksIsLoaded && widgetsIsLoaded
    const isntLoading = !blocksIsLoading && !widgetsIsLoading
    return !(isLoaded && isntLoading)
  },

  getPlugin: plugin => {
    if (!(plugin in state.mobilizations.plugins)) {
      console.error(`The [${plugin}] is not an available plugin`)
      return {}
    }
    return state.mobilizations.plugins[plugin]
  }
})

export const getTemplate = (state, ownProps) => {
  const { list: { data }, templates: { list: { templateId } } } = state.mobilizations
  return data.filter(mob => mob.id === templateId)[0]
}
