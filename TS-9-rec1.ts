export const recordingAdapter: RecordingAdapterDefinition = {
  id: 'my-adapter',
  displayName: 'My Adapter',
  hostFragments: [ ],
  additionalEvents: [ ],

  preferLlmOverNative: (context: RecordingPlaywrightGenerationContext): boolean => {
    return false;
  },

  filterEvent: async (
    context: RecordingEventPrepareContext,
    base: RecordingStageBaseHandler<RecordingEventPrepareContext>,
    next: RecordingStageNext,
  ): Promise<void> => {
    await base(context);
    await next();
  },

  transformCapturedEvent: async (
    context: RecordingEventPrepareContext,
    base: RecordingStageBaseHandler<RecordingEventPrepareContext>,
    next: RecordingStageNext,
  ): Promise<void> => {
    await base(context);
    await next();
  },

  onRecordingStepGenerateDescription: async (
    context: RecordingDescriptionGenerationContext,
    base: RecordingStageBaseHandler<RecordingDescriptionGenerationContext>,
    next: RecordingStageNext,
  ): Promise<void> => {
    await base(context);
    await next();
  },

  onRecordingStepGeneratePlaywright: async (
    context: RecordingPlaywrightGenerationContext,
    base: RecordingStageBaseHandler<RecordingPlaywrightGenerationContext>,
    next: RecordingStageNext,
  ): Promise<void> => {
    await base(context);
    await next();
  },

  onRecordingStepFinalize: async (
    context: RecordingFinalStepContext,
    base: RecordingStageBaseHandler<RecordingFinalStepContext>,
    next: RecordingStageNext,
  ): Promise<void> => {
    await base(context);
    await next();
  },
  
  onRecordingStepSave: async (
    context: RecordingFinalStepContext,
    base: RecordingStageBaseHandler<RecordingFinalStepContext>,
    next: RecordingStageNext,
  ): Promise<void> => {
    await base(context);
    await next();
  },
};